import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";


export default function Home() {
  const [list, setList] = useState([]);
  const [url, setUrl] = useState("");
  const [qty, setQty] = useState(1);

  const adicionarNaLista = () => {
    setList([
      ...list, //Esses tres pontinhos copiam o conteúdo da variável lista
      {
        title: qty + "x Porta Potti 20L",
        image:
          "https://www.tradeinn.com/f/13899/138995864/thetford-banheiro-porta-potti--135.jpg",
        price: 280.2,
        url: url,
        qty: 1,
      },
    ]);
  };

  const removerDaLista = (indice) => {
    //Remover o elemento[indice] da lista usando setState
	//Código aqui
	//setList(novaListaAqui);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            maxWidth: 800,
            margin: "0 auto",
            mt: 5,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              align="center"
              fontWeight="bold"
              sx={{
                mb: 10,
              }}
            >
              Reforma do Dino
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "80% 20% 9%",
                gridColumnGap: "20px",
              }}
            >
              <TextField
                placeholder="URL do produto"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <TextField
                placeholder="Qtd"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <Button variant="outlined" onClick={adicionarNaLista}>
                Ok
              </Button>
            </Box>
            <List>
              {list.map((item) => (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="" src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          ></Typography>
                          {item.url}
                        </React.Fragment>
                      }
                    />
                    <Typography
                      sx={{
                        color: "green",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
          </Box>
        </Box>
      </main>
    </>
  );
}
