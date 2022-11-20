import React from 'react'
import { Author } from '../models'
import AuthorCard from './AuthorCard'
import { Link } from 'react-router-dom';

interface IAuthorsProps {
  authors: Author[]
}

const Authors: React.FC<IAuthorsProps> = ({ authors }) => {
  return (
    <div className="">{
      authors.map((author, index) => (
        <Link key={index} className="" to={`/author/${author.id}`}>
          <AuthorCard author={author} />
        </Link>
      ))
    }</div>
  )
}

export default Authors
