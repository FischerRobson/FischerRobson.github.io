import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Adress = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [cep, setCep] = useState('')
  const [dados, setDados] = useState(null)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        subtitle="Buscar CEP"
        subheader="Digite um CEP e veja a magia acontecer..."
      />
      <CardContent>
        <TextField 
            id="standard-basic" 
            label="Digite o CEP"
            value={cep}
            onChange={
                (e) => setCep(e.target.value)
            }
        />
        <Button
          style={{marginLeft: '20px', marginTop: '11px' }}
          onClick={ cep === "" ? 1 : async () => {
            await axios.get(`https://viacep.com.br/ws/${cep}/json/`) 
                .then(res => {
                    setDados(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            }
          }
          disabled={cep.length !== 8}
          variant="contained"
          color="secondary"
          >
            Buscar
        </Button>
        {(dados && dados.erro) ? "CEP inválido" : '' }
        {(dados === null || dados.erro === true ? '' : (
            <div style={{ marginTop: '11px' }}>
                <p>Logradouro: {dados.logradouro}</p>
                {(!dados.complemento) ? '' : <p>Complemento: {dados.complemento}</p>}
                <p>Bairro: {dados.bairro}</p>
                <p>Cidade: {dados.localidade}</p>
                <p>UF: {dados.uf}</p>
            </div>
        ))}

      </CardContent>
    </Card>
  );
}

export default Adress
