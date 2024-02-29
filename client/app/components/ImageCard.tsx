// create an image card component using material UI 5.

import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

interface ImageCardProps {
  imgUrl: string
}

const ImageCard = ({ imgUrl }: ImageCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Image uploaded by user
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ImageCard