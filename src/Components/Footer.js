import React from 'react'

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';





export default function Footer() {
    return (
        <div>
            <Typography variant="body2" color="text.secondary" align="center">
                {' Book Now '}
                | Created by Ronald Guardado |
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}
