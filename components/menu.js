import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';

// Define the menu items array with name, price, and id
const menuItemsToDisplay = [
  { name: 'Hummus', price: '$5.00', id: '1A' },
  { name: 'Moutabal', price: '$5.00', id: '2B' },
  { name: 'Falafel', price: '$7.50', id: '3C' },
  { name: 'Marinated Olives', price: '$5.00', id: '4D' },
  { name: 'Kofta', price: '$5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
  { name: 'Lentil Burger', price: '$10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
  { name: 'Kofta Burger', price: '$11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
  { name: 'Fries', price: '$3.00', id: '11K' },
  { name: 'Buttered Rice', price: '$3.00', id: '12L' },
  { name: 'Bread Sticks', price: '$3.00', id: '13M' },
  { name: 'Pita Pocket', price: '$3.00', id: '14N' },
  { name: 'Lentil Soup', price: '$3.75', id: '15O' },
  { name: 'Greek Salad', price: '$6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
  { name: 'Baklava', price: '$3.00', id: '18S' },
  { name: 'Tartufo', price: '$3.00', id: '19T' },
  { name: 'Tiramisu', price: '$5.00', id: '20U' },
  { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

// Here, Item is a functional component. It takes name and price as props and returns a View element containing two Text elements.
const Item = ({ name, price }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemText}>{price}</Text>
  </View>
);

// Here, renderItem is a regular function used as a callback for the FlatList component. 
// It takes an item as an argument and returns an Item component.
const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
const Header = () => <Text style={styles.headerText}>Menu</Text>;

export default function MenuList({navigation}) {
  const [showMenu, setShowMenu] = useState(false);

    return (
      <View style={styles.container}>
         
        {!showMenu && (
       
          <ImageBackground resizeMode="cover"    style={styles.background} source={require('../assets/background.png')}>
            <View style={styles.overlay}>
              <Image style={styles.logo} source={require('../assets/icecream.png')} />
              <Text style={styles.headingSection}>
               Little Lemon, your local Mediterranean Bistro
              </Text>
              {/* <Pressable onPress={() => setShowMenu(!showMenu)}>
                <Text style={styles.button}>{showMenu ? 'Home' : 'View Menu'}</Text>
              </Pressable> */}
              <Pressable 
           onPress={() => navigation.navigate("Subscribe")} >
           <Text style={styles.button}>NewsLetter</Text>
           </Pressable>
            </View>
          </ImageBackground>
        )}
        {showMenu && (
        <View style={styles.menuContainer}>
          <Pressable onPress={() => setShowMenu(!showMenu)}>
            <Text style={styles.button}>Home</Text>
          </Pressable>
        <FlatList //it takes three props:
      
        //1: data: This is the array of items (menuItemsToDisplay) that FlatList will display.
                    data={menuItemsToDisplay}
                    
        //2: renderItem: This is the function (renderItem) that FlatList will call for each item in the data array. It uses the Item component to render the item's name and price.
                    renderItem={renderItem} 
        //3: keyExtractor: This specifies a unique key for each item based on its id property, which helps React efficiently update the list.
                    keyExtractor={item => item.id} 
        
             //       ListHeaderComponent={Header}
              />
            </View>
      )}
       
    </View>
  );
}

// Styles - Define the styles for various components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
 //   marginTop: -30,
  },
  logo: {
    height: 400,
    width: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  
  },
 
  background: {
    flex: 1,
    width: '100%', // Ensure it takes the full width
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0 ,
   // marginTop: -27,hight: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    //backgroundColor: "#495E57",
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    color: "#ffffff",
    fontSize: 24,
  },
  headingSection: {
    fontSize: 28,
    padding: 10,
    marginVertical: 8,
    color: "#ffffff",
    textAlign: 'center',
   // backgroundColor: '#495E57',
  },
  button: {
    color:'white',
    fontSize: 26,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 12,
    textAlign: 'center',
  },
});

