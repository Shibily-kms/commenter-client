import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SingIn from '../pages/admin/SingIn'
import Dashboard from '../pages/admin/DashboardPage'
import UserList from '../pages/admin/UserList'
import Report from '../pages/admin/Report'
import { useEffect } from 'react'
import { useSelector,  useDispatch } from 'react-redux'
import { getAdminData, reset } from '../Redux/features/admin/adminAuthSlice'



function Admin() {
  const dispatch = useDispatch();
  
  const { admin } = useSelector((state) => state.adminAuth)

  useEffect(() => {
    if (!admin && localStorage.getItem('adminToken')) {
      dispatch(getAdminData())
      dispatch(reset())
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/sign-in' element={<SingIn />} />
        <Route path='/user-list' element={<UserList />} />
        <Route path='/reports' element={<Report />} />
      </Routes>
    </div>
  )
}

export default Admin