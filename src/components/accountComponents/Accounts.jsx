import { useState, useEffect } from 'react'
import { Alert, Button, Modal, Form } from 'react-bootstrap'

export default function Accounts({setUser}) {
  const [accounts, setAccounts] = useState([])
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [modalType, setModalType] = useState(1)
  const [error, setError] = useState(null)

  
  const loadAccounts = async () => {
    const data = localStorage.getItem('dS')
    const acc = JSON.parse(data)
    acc && setAccounts(acc)
   
    
  }

  const reset = () => {
    setNumber("")
    setPassword("")
    setModalType(1)
    setError(false)
  }

  const submitForm = () => {
    if (number && password) {
      if(number.length === 10 && password.length >= 8 && password.length <= 16) {
        const acc = accounts && accounts.find(a => a.number === number)
      if(modalType === 1) {
        if (acc) setError('Account already exists')
        else {
          setAccounts([...accounts, { number, password }])
          setUser(number)
        }
      } else {
        if (acc.password === password) {
          setUser(number)
        }
        else setError('Wrong password')
      }
      }
    } else {
      setError('Number and password are required')
    }
  }

  useEffect(() => {
    loadAccounts()
  }, [])

  useEffect(() => {
    localStorage.setItem('dS', JSON.stringify(accounts))
    reset()
  }, [accounts])
  
  return (
    <Modal show={true} centered size="lg">
      <Modal.Header>
        <Modal.Title>{modalType === 1 ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="Enter number" value={number} onChange={(e) => setNumber(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={submitForm}>
            {modalType === 1 ? 'Sign Up' : 'Login'}
          </Button>
        </Form>

        { error && <Alert variant="danger">{error}</Alert> }
      </Modal.Body>

      <Modal.Footer>
        <h4>{ modalType === 1 ? "Already have an account?" : "Don't have an account?" }</h4>
        <Button variant="primary" onClick={() => setModalType(modalType === 1 ? 2 : 1)}>{ modalType === 1 ? 'Login' : 'Sign Up' }</Button>
      </Modal.Footer>
    </Modal>
  )
}
