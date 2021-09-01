import React from 'react';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function GitCard(props) {
  const classes = useStyles();
  const { name, username, avatarSrc, followingCount, followCount } = props;

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    >
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={avatarSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    @{username}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Following: {followingCount}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Followers: {followCount}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  );
}