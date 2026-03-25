import { useState, useEffect, useRef } from 'react'
import './App.css'


export default function App() {

 
  const [messages,  setMessages]  = useState([])   
  const [input,     setInput]     = useState('')   
  const [loading,   setLoading]   = useState(false) 
  const [sessionId, setSessionId] = useState(null) 
  const [connected, setConnected] = useState(false)
  const [error,     setError]     = useState('')    
  const bottomRef = useRef(null)

  
  useEffect(() => {
    fetch('/new-session', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setSessionId(data.session_id)
        setConnected(true)
      })
      .catch(() => setError('Cannot connect to backend. Is it running?'))
  }, [])


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  
  async function sendMessage() {
    if (!input.trim() || loading || !sessionId) return

    const userText = input.trim()
    setInput('')
    setError('')

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setLoading(true)

    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: userText })
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')

      // Add bot reply to chat
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }])
    } catch (e) {
      setError(e.message)
      setMessages(prev => prev.slice(0, -1)) // remove last user msg on error
    } finally {
      setLoading(false)
    }
  }

  // ── Press Enter to send ──────────────────────────────────────
  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  
  function newChat() {
    setMessages([])
    setError('')
    fetch('/new-session', { method: 'POST' })
      .then(res => res.json())
      .then(data => setSessionId(data.session_id))
  }

  
  return (
    <div className="app">

      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="logo">✦</div>
          <div>
            <div className="title">Gemini Chatbot</div>
            <div className="subtitle">Powered by Google Gemini 1.5 Flash</div>
          </div>
        </div>
        <button className="new-btn" onClick={newChat}>+ New Chat</button>
      </div>

      {/* Status */}
      <div className="status-bar">
        <span className={connected ? 'online' : 'offline'}>
          {connected ? '● Connected' : '○ Connecting...'}
        </span>
        <span className="model-name">gemini-1.5-flash</span>
      </div>

      {/* Error */}
      {error && (
        <div className="error">
          ⚠ {error}
          <button onClick={() => setError('')}>✕</button>
        </div>
      )}

      {/* Messages */}
      <div className="messages">
        {messages.length === 0 && !loading && (
          <div className="welcome">
            <div className="welcome-icon">✦</div>
            <h2>How can I help you today?</h2>
            <p>Type a message below to start chatting with Gemini AI</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`row ${msg.role === 'user' ? 'user-row' : 'bot-row'}`}>
            {msg.role === 'bot' && <div className="avatar bot-avatar">✦</div>}
            <div className={`bubble ${msg.role === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
              {msg.text.split('\n').map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
            </div>
            {msg.role === 'user' && <div className="avatar user-avatar">You</div>}
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="row bot-row">
            <div className="avatar bot-avatar">✦</div>
            <div className="bubble bot-bubble typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="input-area">
        <div className="input-box">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Enter to send)"
            rows={2}
            disabled={loading || !connected}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim() || !connected}
          >
            ↑
          </button>
        </div>
        <p className="hint">Enter to send · Shift+Enter for new line</p>
      </div>

    </div>
  )
}
