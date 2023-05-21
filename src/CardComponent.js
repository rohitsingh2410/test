import React from "react";

const CardComponent = ({ data }) => {
  //   const data = {
  //     id: 1,
  //     name: 'Leanne Graham',
  //     username: 'Bret',
  //     email: 'Sincere@april.biz',
  //     address: {
  //       street: 'Kulas Light',
  //       suite: 'Apt. 556',
  //       city: 'Gwenborough',
  //       zipcode: '92998-3874',
  //       geo: {
  //         lat: '-37.3159',
  //         lng: '81.1496',
  //       },
  //     },
  //     phone: '1-770-736-8031 x56442',
  //     website: 'hildegard.org',
  //     company: {
  //       name: 'Romaguera-Crona',
  //       catchPhrase: 'Multi-layered client-server neural-net',
  //       bs: 'harness real-time e-markets',
  //     },
  //   };
console.log("dataRec",data)
  const cardStyle = {
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    marginBottom: "5px",
  };
  if(data){
    return (

        <div style={cardStyle}>
          <h1 style={titleStyle}>{data.name}</h1>
          <p style={textStyle}>Username: {data.username}</p>
          <p style={textStyle}>Email: {data.email}</p>
          <p style={textStyle}>
            Address: {data.address.street}, {data.address.suite},{" "}
            {data.address.city}, {data.address.zipcode}
          </p>
          <p style={textStyle}>Phone: {data.phone}</p>
          <p style={textStyle}>Website: {data.website}</p>
          <p style={textStyle}>Company: {data.company.name}</p>
          <p style={textStyle}>Catchphrase: {data.company.catchPhrase}</p>
          <p style={textStyle}>BS: {data.company.bs}</p>
        </div>
      );
  }else{
    return <div>No Data</div>
  }
  
};

export default CardComponent;
