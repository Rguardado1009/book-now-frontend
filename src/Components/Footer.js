import React from 'react'

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';





export default function Footer() {
    return (
        <div>
            <Typography variant="subtitle1" color="secondary" gutterBottom align="center">
                {' Treehouse Studios '}
                | Created by Ronald Guardado |
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}
