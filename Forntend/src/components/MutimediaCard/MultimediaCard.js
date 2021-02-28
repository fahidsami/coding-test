import React from "react";
import {Card} from "react-bootstrap";

const MultimediaCard=({ cardlist }) => cardlist.map((el,index) =>
       <Card key={index} style={{ width: '125px', marginRight: "10px" }}>
           <Card.Img variant="top" src={el.thumbnails['thumb-677x474'].url}/>
       </Card>)
export default MultimediaCard;
