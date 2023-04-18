import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  Image
} from 'react-native';


const URL_LIST = [
  'https://zezeya.com/shop6/board/qa/6/?is_pcver=T',
  'https://zezeya.com/product/brand.html',
  'https://zezeya.com/project/EVENT/157/',
  'https://zezeya.com/category/best/149/',
  'https://zezeya.com/category/mini-size/150/',
]

const NAME_LIST = [
  'Qna',
  'Brand',
  'Event',
  'Best',
  'mini size',
] 

let LocationURl =({links,menu}) => {
  if (!Array.isArray(links)) return false

  let btns = links.map((url , i) => (
    <Text style={styles.btns} key={i} onPress={ _ => Linking.openURL(url) }>{menu[i]}
    </Text>
  ))

  return (
    <View style={styles.layout}>
      {Array.isArray(links) && btns}
    </View>
  )
}

let NavSection = () => {

  return (
  <View style={styles.navStyle}>
      <Text style={styles.navItem} onPress={ _ => Linking.openURL('https://zezeya.com/') } ><Image style={styles.navImg} source={{uri : 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-cart-web-flaticons-lineal-color-flat-icons-3.png'}}/></Text>
      <Text style={styles.navItem} onPress={ _ => Linking.openURL('https://zezeya.com/') } ><Image style={styles.navImg} source={{uri : 'https://img.icons8.com/cute-clipart/512/home.png'}}/></Text>
      <Text style={styles.navItem} onPress={ _ => Linking.openURL('https://zezeya.com/') } ><Image style={styles.navImg} source={{uri : 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-like-gamification-flaticons-lineal-color-flat-icons.png'}}/></Text>
  </View>
  )

}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          
          <Image style={styles.imgStyle} source={{uri : 'https://annecy1.cafe24.com/web/upload/NNEditor/20230316/mainlogo3.png'}}/>
          <Text style={styles.title}>Welcome to ZEZEYA!! 😃</Text>
        <View>
          <LocationURl links={URL_LIST} menu={NAME_LIST}/>
        </View>
      <NavSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  layout : {
    backgroundColor : '#efefef',
  },
  btns : {
    color : '#fff',
    fontSize : 30,
    margin:10,
    backgroundColor : '#416cec',
    textAlignVertical : 'center',
    textAlign: 'center',
    flexWrap:"wrap",
    alignItems: "center",
    paddingVertical : 5,
  },
  title : {
    marginTop: 20,
    marginBottom : 20,
    fontSize : 40,
    color : '#000',
    alignSelf : 'center',
    fontWeight : 'bold',

  },
  imgStyle : {
    width : 300,
    height : 150,
    alignSelf : 'center',
    resizeMode: "contain",
  },
  navStyle : {
    display : 'flex',
    alignItems : "flex-end",
    flexDirection  : "row",
    justifyContent : "space-evenly",
    textAlign : "center",
    marginTop : 70, 
  },
  navItem : {
    padding : 20,
    width : 30,
    height : 50
  },
  navImg : {
    justifyContent : "flex-end",
    paddingTop : 20,
    width :50,
    height :50,
  }
});

export default App;
