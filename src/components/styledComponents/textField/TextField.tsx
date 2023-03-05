import React, {useState} from 'react';
import {View, Text, TextInput, TextInputProps, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextFieldStyles from './TextFieldStyles';
import useTheme from '@GoalTrackingApp/theme';

interface TextFieldProps extends TextInputProps {
  label: string;
  type?: 'text' | 'password' | 'code' | 'textArea' | 'select' | 'date' | 'time';
  menuItems?: string[];
  error?: string;
}

const TextField = React.memo<TextFieldProps>((props: TextFieldProps) => {
  const theme = useTheme();
  const styles = TextFieldStyles(theme);
  const colors = theme.colors;
  const fonts = theme.fonts;

  const [showDateTime, setShowDateTime] = useState(false);

  if (props.type === 'date' || props.type === 'time') {
    return (
      <>
        <View style={styles.container}>
          <Text style={[styles.labelText]}>{props.label}</Text>
          <View>
            <TextInput
              style={[
                styles.inputField,
                fonts.bodyLarge,
                typeof props.error === 'string' &&
                  props.error.length > 1 &&
                  styles.inputFieldError,
              ]}
              onFocus={() => {
                setShowDateTime(true);
                Keyboard.dismiss();
                console.log('Focused!');
              }}
              cursorColor={colors.primary}
              selectionColor={colors.primary}
              placeholderTextColor={colors.lighterText}
              {...props}
              value={
                typeof props.value === 'string' && props.value.length > 3
                  ? props.type === 'time'
                    ? new Date(props.value).toLocaleTimeString()
                    : new Date(props.value).toDateString()
                  : props.value
              }
            />
          </View>
          <Text style={[styles.errorText, fonts.caption]}>{props.error}</Text>
        </View>
        {showDateTime && (
          <DateTimePicker
            mode={props.type}
            value={
              props.value && props.value.length > 3
                ? new Date(props.value)
                : new Date()
            }
            display="default"
            onChange={(_e, date) => {
              setShowDateTime(false);
              props.onChangeText !== undefined &&
                props.onChangeText(String(date));
            }}
          />
        )}
      </>
    );
  }

  if (props.type === 'select') {
    return (
      <View style={styles.container}>
        <Text style={[styles.labelText]}>{props.label}</Text>
        <View
          style={[
            styles.inputField,
            fonts.bodyLarge,
            typeof props.error === 'string' &&
              props.error.length > 1 &&
              styles.inputFieldError,
          ]}>
          <Picker
            style={styles.selectInputText}
            mode={
              props.menuItems && props.menuItems.length > 7
                ? 'dialog'
                : 'dropdown'
            }
            selectedValue={props.value}
            onValueChange={(itemValue, _itemIndex) =>
              props.onChangeText !== undefined &&
              props.onChangeText(String(itemValue))
            }>
            {props.placeholder && (
              <Picker.Item label={props.placeholder} value="" enabled={false} />
            )}
            {props.menuItems !== undefined &&
              props.menuItems.map((item, index) => (
                <Picker.Item label={item} value={item} key={index} />
              ))}
          </Picker>
        </View>
        <Text style={[styles.errorText, fonts.caption]}>{props.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.labelText]}>{props.label}</Text>
      <View>
        <TextInput
          style={[
            styles.inputField,
            fonts.bodyLarge,
            props.type === 'textArea' && styles.textAreaText,
            props.type === 'code' && styles.codeText,
            typeof props.error === 'string' &&
              props.error.length > 1 &&
              styles.inputFieldError,
          ]}
          cursorColor={colors.primary}
          selectionColor={colors.primary}
          placeholderTextColor={colors.lighterText}
          secureTextEntry={props.type === 'password'}
          {...props}
        />
      </View>
      <Text style={[styles.errorText, fonts.caption]}>{props.error}</Text>
    </View>
  );
});

export default TextField;
