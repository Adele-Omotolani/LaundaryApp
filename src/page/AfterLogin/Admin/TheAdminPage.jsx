import React from 'react'
import styled from 'styled-components'
import AdminDashBoard from './AdminDashBoard'

const TheAdminPage = () => {
  return (
    <TheAdminHolder>
        <AdminMini>
            <AdminDashBoard/>
        </AdminMini>
    </TheAdminHolder>
  )
}

export default TheAdminPage
// const TheDashB = styled.div`
// `
const AdminMini = styled.div`
    height: 96%;
    width: 98%;
    /* background-color: maroon; */

`
const TheAdminHolder = styled.div`
    height: 100%;
    width: 78%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: navy; */
`