import React from 'react'
import { Container, PostForm } from '../components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AddPost() {
  const status = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  return (
    <div className='py-8'>
        <Container>
        {status ? (
            <PostForm />
          ): (
            navigate('/signup')
          )}
        </Container>
    </div>
  )
}

export default AddPost