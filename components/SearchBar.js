import { StyleSheet, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import React from 'react'
import {
    Button,
    Layout,
    Text,
    useTheme,
    Icon,
    Input
} from '@ui-kitten/components';

const SearchIcon =(props)=> (
    <Icon {...props} name="search-outline" fill={props.theme['color-basic-200']} width={24} height={24}/>
)

const SearchBar = (props) => {

  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Input 
            size="large"
            value={props.inputValue}
            label={props.inputLabel}
            style={[styles.searchInput, {backgroundColor: props.inputBackground}]}
            placeholder={props.inputPlaceholder}
            accessoryLeft={<SearchIcon theme={theme}/>}
            onChangeText={(text)=> props.handleInputChange(text)}
        />
    </TouchableWithoutFeedback>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchInput: {
        width: '85%',
        height: 48, 
        //flex: 0.9,
        borderWidth: 0,
        borderRadius: 8,
    }
})