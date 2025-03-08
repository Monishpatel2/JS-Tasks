import React, { useState, useEffect } from 'react';

const APIToTable = () => {
  const [escuelaProducts, setEscuelaProducts] = useState([]);
  const [jsonPlaceholderUsers, setJsonPlaceholderUsers] = useState([]);
  const [fakeStoreProducts, setFakeStoreProducts] = useState([]);
  const [reqresUsers, setReqresUsers] = useState([]);
  const [dummyJsonQuotes, setDummyJsonQuotes] = useState([]);
  const [dummyJsonProducts, setDummyJsonProducts] = useState([]);
  const [goRestUsers, setGoRestUsers] = useState([]);

  useEffect(() => {
  
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setEscuelaProducts(data));

  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setJsonPlaceholderUsers(data));

  
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setFakeStoreProducts(data));


    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => setReqresUsers(data.data));


    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => setDummyJsonQuotes(data.quotes));

    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setDummyJsonProducts(data.products));

    fetch('https://gorest.co.in/public/v2/users')
      .then(response => response.json())
      .then(data => setGoRestUsers(data));
  }, []);

  return (
    <div>
      <h2  style={{margin:50}}>API Responses in Tables</h2>

      <h3>Escuela Products</h3>
      <table border={1} style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Price</th></tr>
        </thead>
        <tbody>
          {escuelaProducts.map(product => (
            <tr key={product.id}><td>{product.id}</td><td>{product.title}</td><td>{product.price}</td></tr>
          ))}
        </tbody>
      </table>

      <h3>JSONPlaceholder Users</h3>
      <table border={1}style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
          {jsonPlaceholderUsers.map(user => (
            <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td></tr>
          ))}
        </tbody>
      </table>

      <h3>Fake Store Products</h3>
      <table  border={1}style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Price</th><th>Image</th></tr>
        </thead>
        <tbody>
          {fakeStoreProducts.map(product => (
            <tr key={product.id}><td>{product.id}</td><td>{product.title}</td><td>{product.price}</td><td><img src={product.image} alt={product.title} width="50"/></td></tr>
          ))}
        </tbody>
      </table>

      <h3>ReqRes Users</h3>
      <table  border={1}style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Avatar</th></tr>
        </thead>
        <tbody>
          {reqresUsers.map(user => (
            <tr key={user.id}><td>{user.id}</td><td>{user.first_name} {user.last_name}</td><td>{user.email}</td><td><img src={user.avatar} alt={user.first_name} width="50"/></td></tr>
          ))}
        </tbody>
      </table>

      <h3>Dummy JSON Quotes</h3>
      <table  border={1}style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Quote</th><th>Author</th></tr>
        </thead>
        <tbody>
          {dummyJsonQuotes.map(quote => (
            <tr key={quote.id}><td>{quote.id}</td><td>{quote.quote}</td><td>{quote.author}</td></tr>
          ))}
        </tbody>
      </table>

      <h3>Dummy JSON Products</h3>
      <table  border={1}style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Title</th><th>Price</th><th>Image</th></tr>
        </thead>
        <tbody>
          {dummyJsonProducts.map(product => (
            <tr key={product.id}><td>{product.id}</td><td>{product.title}</td><td>{product.price}</td><td><img src={product.thumbnail} alt={product.title} width="50"/></td></tr>
          ))}
        </tbody>
      </table>

      <h3>GoRest Users</h3>
      <table  border={1} style={{margin:100}}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Status</th></tr>
        </thead>
        <tbody>
          {goRestUsers.map(user => (
            <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.status}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIToTable;
