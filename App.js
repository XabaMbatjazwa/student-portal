import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'

export default function App() 
{
  return ( 
    <>
      <StatusBar></StatusBar>  
      <View style={styles.outerview}>
      <View style={styles.view}>
        <View style={styles.yah}>
          <Image style={styles.image} source={require('./assets/untitled.png')} />
          <Text style={styles.course}>Xaba Mbatjazwa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.another}>LIMKOKWING UNIVERSITY OF CREATIVE TECHNOLOGY STUDENT PORTAL</Text>
        </View>
        <Image style={styles.limko} source={require('./assets/download.png')} />
      </View>  
        <View style={styles.biggest}>     
          <View style={styles.lesotho}>
            <Image style={styles.image} source={require('./assets/calu.jpg')} />
            <Text style={styles.course}>Calculus II</Text>
            <Text style={styles.info}>An introduction to calculus II, to prepare for the programming world</Text>
          </View> 
          <View style={styles.lesotho}>
            <Image style={styles.image} source={require('./assets/cplus.png')} />
            <Text style={styles.course}>C++ Programming II</Text>
            <Text style={styles.info}>A continuation from c++ 1, but now more hands on</Text>
          </View>
        </View> 

         <View style={styles.biggest}>     
          <View style={styles.lesotho}>
            <Image style={styles.image} source={require('./assets/db.jpg')} />
            <Text style={styles.course}>DataBase Systems</Text>
            <Text style={styles.info}>Modeling, Designing and creating databases.</Text>
          </View> 
          <View style={styles.lesotho}>
            <Image style={styles.image} source={require('./assets/data.jpg')} />
            <Text style={styles.course}>Data Communication</Text>
            <Text style={styles.info}>Looks into the everyday use of computers and how data moves to allow the communication to take place</Text>
          </View>
        </View> 
      </View>
    </>   
      );
}

const styles = StyleSheet.create(
{  
  outerview: 
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  yah:
  {
    alignItems: 'center',
    marginRight: 50,
  },
  lesotho: 
  {
    alignItems: 'center',
    height: 150,
    width: '40%',
    borderWidth: 1,
    backgroundColor: 'orange',
    margin: 12,
  },
  image:
  {
    height: 50,
    width: 50,
    borderRadius: 70,
  },
  biggest:
  {
    height: 180,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  course:
  {
    fontWeight: 'bold',
  },
  info:
  {
    alignItems: 'flex-start',
    color: 'black',
  },
  details:
  {
    fontWeight: 'normal',
  },
  align:
  {
    alignContent: 'flex-start',
  },
  box:
  {
    borderWidth: 1,
    alignItems: 'center',
    height: 25,
  },
  another:
  {
    margin: 2,
    fontWeight: 'bold',
  },
  view:
  {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limko:
  {
    marginLeft: 50,
    height: 80,
    width: 80,
  }
})