import React from 'react' 
import {Box, Input, Label, Select} from 'theme-ui'

const Sender = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      
      <Box
        as='form'
        // onSubmit={e => e}
      >

        <Label
          sx={{
            fontSize:'24px',
            textAlign: 'center',
            margin: '10px'
          }}
        >Help the cause, today.</Label>

        <Label>First Name</Label>
          <Input 
            type='name'
            name='first name'
          />
        
        <Label>Last Name</Label>
          <Input 
            type='name'
            name='last name'
          />
        
        <Label>Street Address</Label>
          <Input
            name='Address'
          />

        <Label>State</Label>
          <Select
            defaultValue='Select a State'
          > 
            <option>CA</option>
          </Select>

        <Label>Postal Code</Label>
          <Input
            name='Postal'
          />

        <Label>City</Label>
          <Input
            name='City'
          />

        <Label>Email</Label>
          <Input
            type='email'
            name='Email'
          />

        <Label>Password</Label>
          <Input
            name='Password'
          />
      </Box>
    </Box>
  )
}

export default Sender
