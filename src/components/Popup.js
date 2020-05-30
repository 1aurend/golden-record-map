<Box
  m={1}
  p={1}
  textAlign='left'
  >
  {
    data.tracks.map((track, i) => {
      const trackData = music[track-1]
      return (
        <Text
          key={track-1}
          pb={1}
          fontSize={12}
          >
          <Link
            onClick={() => {
              setTrack(music[track-1])
              history.push(data.url)
            }}
            style={{color:'black', textDecoration: 'underline', fontWeight: 'bold'}}
            >
            {i+1}. {trackData.Piece}
          </Link>
          <Text fontSize={10}>{trackData.Composer}</Text>
        </Text>
      )
    })
  }
</Box>
