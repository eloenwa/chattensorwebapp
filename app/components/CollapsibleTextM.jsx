import React from 'react'
import { Collapse,Box } from '@chakra-ui/react';

function CollapsibleTextM() {

    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

  return (
    <Box color={'#ffff'} bgColor={'#1B1B26'} minH={'58px'} fontSize={'12px'}>
      <Collapse startingHeight={20} in={show} onClick={handleToggle} >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      </Collapse>
        {show ? 'less..' : 'more..'}
    </Box>
  )
}

export default CollapsibleTextM