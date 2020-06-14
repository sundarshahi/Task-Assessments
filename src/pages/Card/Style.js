import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({

}))`

*
{
  font-family: rubik;
  text-decoration:none;
  
}



.container{
  display: flex;
  justify-content: center;
  align-items: center;
  
  a:visited :active {
    color:black;
  }
}

.container .card .button_id{
  position: absolute;   
  bottom:100px;
  margin: 0px;
  padding:5px;
  width: 33px;
  left: 5px; 
  
  font-size: 18px;
  font-weight: 800;
  border-radius: 50%;

  color: white;
  text-align: center;
}
.container .card .button_info{
  position: absolute;   
  bottom:120px;
  margin: 0px;
  padding:5px;
  width: 33px;
  left: 5px; 
  
  font-size: 18px;
  font-weight: 800;
  border-radius: 50%;

  color: white;
  text-align: center;
}
.container .card{
  position: relative;
  width: 130px;
  height: 150px;
  background: linear-gradient(-30deg,rgb(207, 205, 205),rgb(255, 255, 255));
 
  border-radius: 6px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  border:1px solid ${props =>props.color};;
  overflow: hidden;
}

.container .card:hover {
	animation: bounce 0.5s linear;
}


.container .card:after
{
  content: "";
  /* position: absolute;
  top:0;
  left: 0;  
  font-size: 12px;
  font-weight: 800;
  margin:25px 20px; */
  
  display: block;
  width: 50%;
  height: 45%;
  border-radius: 100%;
  background-color: #fff;
  opacity: .7;
  position: absolute;
  top: 15%;
  left: 25%;
}
.container .card:before
{
  content: "";
  position: absolute;
  background-color:${props =>props.color};
  opacity:39%;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  
  
  clip-path: circle(50px at 0% 0%);
}
.container .card .imgBx
{
  position: absolute;
  top: 7%;
  left: 12%;
  width: 100%;
  height: 220px;

  .card-image {
	height: 80px;
	position: relative;
	z-index: 2;
}
}

.container .card .contentBx
{
  position:absolute;
  bottom:0;
  width: 100%;
  text-align: center;
}
.container .card .contentBx h2
{
position: relative;
letter-spacing: 1px;
}

.type_area{
  display:flex;
  justify-content:center;
  align-items:center;
}
.container .card .contentBx .type
{
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 40px 25px;
 
}
.container .card .contentBx  h3
{
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom:30px;
  
}

.container .card .contentBx .type{
 display: flex;
 align-items:center;


}

.types_form
{

  align-items:center;
  font-weight: 800;
  font-size: 10px;
  width: 80px;

  border-radius:3px;
  margin-right: 10px;
  padding: 4px;
  color: white;
 
}
.container .card a{
  text-decoration: none;
  font-size: 14px;
  color: black;
}
.container .card a:visited{
  text-decoration: none;
  font-size: 14px;
  color: black;
  .container .card a:active{
  text-decoration: none;
  font-size: 14px;
  color: black;
}
}
.id_card{
  position: absolute;
  bottom:50px;
  left: 0px;  
  font-size: 10px;
  font-weight: 800;
  margin:25px 20px;
  color: white;
}
.id_card_middle{
  display:flex;
  position: relative;
  right:21px;
  top:30px;  
  font-size:30px;
  font-weight: 800;
  margin:25px 20px;
  text-transform: uppercase;
  font-style:italic;
  color: #19162314;
}
@keyframes bounce {
	20% {
			transform: translateY(-6px);
	}
	40% {
			transform: translateY(0px);
	}

	80% {
			transform: translateY(-2px);
	}
	100% {
			transform: translateY(0);
	}
}
`