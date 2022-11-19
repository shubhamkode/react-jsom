import React from 'react'
import { Author } from '../models'
import AuthorCard from './AuthorCard'
import { Link } from 'react-router-dom';

interface IAuthorsProps{
  authors: Author[]
}

const Authors: React.FC<IAuthorsProps> = ({authors}) => {
  return (
    <div className="space-y-5">{
      authors.map((author,index) => (
        <Link key={index} to={`/author/${author.id}`}>
          <AuthorCard author={author}  />
        </Link>
      ))
    }</div>
  )
}

export default Authors