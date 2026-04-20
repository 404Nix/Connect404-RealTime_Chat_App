import { styled } from '@mui/material'
import React from 'react'

export const VisuallyHidden = styled('input')({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
})