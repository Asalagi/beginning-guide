<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>  
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <style>
    input {
      width: 150px;
      border: 1px solid  black;
    }
    textarea {
      width: 150px;
      height: 150px;
      border: 1px solid black;
    }
    table {
      border: 1px solid  black;
    }
    th {
      background-color: grey;
      border: 0px solid  black;
    }
    td {
      border: 0px solid  black;
      vertical-align: top;
    }
    .box {
      border: 3px solid black;
      border-style: dashed;
      border-radius: 10px;
      margin: 5px;
      padding: 3px;
    }
  </style>
   <script type="text/babel">
  function Registration() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (event) => {
    event.preventDefault()
    }

    function handleCancel(event) {
      setFormData(initialFormData)
    }

    function handleNameChange (event) {
      setName(event.target.value)
    }

    const handleEmailChange = (event) => { 
      setEmail(event.target.value)
    }

    const handleMessageChange = (event) => {
      setMessage(event.target.value)
    } 

    return (
      <div>
        <form>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Form </th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td><label htmlFor="name">Name: </label> </td>
           <td><input id="name" onChange={handleNameChange} /></td>
          </tr>
          <tr>
           <td><label htmlFor="email">Email: </label> </td>
           <td><input id="email" onChange={handleEmailChange} /></td>
          </tr>
          <tr>
           <td><label htmlFor="message">Message: </label> </td>
           <td><textarea id="message" onChange={handleMessageChange} /></td>
          </tr>
          <tr>
           <td><button type="submit" onSubmit={handleSubmit}>Submit</button></td>
           <td><button type="cancel" onCancel={handleCancel}>Cancel</button></td>
          </tr>
          <tr>
          <th colSpan="2">
            Display
          </th>
          </tr>
          <tr>
        <td colSpan="2">
          <p>{name}<br />
            {email}<br />
         {message}</p>
        </td>
      </tr>
        </tbody>
      </table>
    </form>
      </div>
      )
  }

  ReactDOM.render(<Registration />, document.getElementById('root'))
  </script>
  </body>