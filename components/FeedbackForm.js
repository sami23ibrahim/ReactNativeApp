import React, { useState } from 'react'; 
import { ScrollView, StyleSheet, Text, TextInput,KeyboardAvoidingView,Platform } from 'react-native'; 

const FeedbackForm = () => { 
 // declare the variables 
 const [firstName, onChangeFirstName] = useState(''); 
 const [lastName, onChangeLastName] = useState(''); 
 const [message, onChangeMessage] = useState(''); 
 const [phoneNumber, onChangePhoneNumber] = useState(''); 

return ( 
  < KeyboardAvoidingView style={styles.container}>
 <ScrollView keyboardDismissMode='on-drag'> 
  <Text style={styles.headingSection}> 
 How was your visit to Little Lemon? 
 </Text> 

<TextInput 
style={styles.input} 
value={firstName} 
 onChangeText={onChangeFirstName} 
 placeholder={'text'}
 clearButtonMode='always'
/> 
<TextInput 
secureTextEntry={true}
 style={styles.input} 
value={lastName} 
onChangeText={onChangeLastName} 
placeholder={'password'}
/> 
 <TextInput 
style={styles.messageInput} 
value={message} 
onChangeText={onChangeMessage} 
placeholder={'number'}
keyboardType='phone-pad'
/> 
 </ScrollView> 
 </KeyboardAvoidingView>
 ); 
}; 

const styles = StyleSheet.create({ 
 container: { 
 flex: 1, 
}, 
 input: { 
height: 40, 
 margin: 12, 
 borderWidth: 1, 
 padding: 10, 
 fontSize: 16, 
 borderColor: 'EDEFEE', 
 backgroundColor: '#F4CE14', 
 }, 
 messageInput: { 
 height: 50, 
 margin: 12, 
 borderWidth: 1, 
 padding: 10, 
 fontSize: 16, 
 backgroundColor: '#F4CE14', 
 }, 
 
 headingSection: { 
fontSize: 28, 
 padding: 20, 
 marginVertical: 8, 
 color: '#EDEFEE', 
 textAlign: 'center', 
 backgroundColor: '#495E57', 
 }, 
}); 

export default FeedbackForm; 