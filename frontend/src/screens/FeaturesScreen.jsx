import Meta from '../components/Meta'
import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useGetFeaturesDetailsQuery } from '../slices/featuresApiSlice'
import { addToLocalList, clearLocalList } from '../slices/localListSlice'
import { Link } from 'react-router-dom'

const FeaturesScreen = () => {
  const [list, setList] = useState('')
  const dispatch = useDispatch()

  //createApi Example
  const { data: backendData, isLoading, error } = useGetFeaturesDetailsQuery()

  //createSlice Example
  const addToListHandler = (e) => {
    e.preventDefault()
    dispatch(addToLocalList({ name: list }))
    setList('')
  }
  const { listItems } = useSelector((state) => state.localList)

  return (
    <>
      <Meta title='Features' />
      {isLoading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <p>Error: {error?.data?.message || 'Something went wrong'}</p>
      ) : (
        <div className='mb-2'>
          <Link to={'/'}>
            <p>Go back to home screen</p>
          </Link>
          {backendData ? (
            <>
              <h3>Data from backend:</h3>
              <ul>
                {backendData.length > 0 &&
                  backendData.map((currElement, index) => (
                    <li key={index}>
                      <strong>{currElement.name}: </strong>
                      <span>{currElement.about}</span>
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            ''
          )}
        </div>
      )}

      <hr />
      <Row className='my-3'>
        <Col xs={4}>
          <h3>Local storage</h3>
        </Col>
        <Col xs={2}>
          <Button onClick={() => dispatch(clearLocalList())}>Clear List</Button>
        </Col>
      </Row>
      <Form onSubmit={addToListHandler}>
        <Row>
          <Col>
            <Form.Group className='mb-3' controlId='formBasicList'>
              <Form.Control
                type='text'
                placeholder='Add something to the list'
                value={list}
                onChange={(e) => {
                  setList(e.target.value)
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button type='submit'>Add</Button>
          </Col>
        </Row>
      </Form>
      <ul>
        {listItems &&
          listItems.map((x, index) => <li key={index}>{x.name}</li>)}
      </ul>
    </>
  )
}

export default FeaturesScreen
