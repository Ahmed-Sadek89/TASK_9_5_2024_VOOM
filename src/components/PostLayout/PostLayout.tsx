"use client"
import React from 'react'
import Header from '../Header/Header'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

const PostLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Header />
            <div className="min-h-[calc(100vh-1rem)]">
                {children}
            </div>
        </Provider>
    )
}

export default PostLayout
