import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {Formik} from 'formik';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import TextField from '@GoalTrackingApp/components/styledComponents/textField/TextField';
import CreateTaskScreenStyles from './CreateTaskScreenStyles';
import useTheme from '@GoalTrackingApp/theme';

const CreateTaskScreen: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = CreateTaskScreenStyles(theme);

  const goalValidationSchema = yup.object().shape({
    name: yup.string().required('Goal name is required!'),
    frequency: yup.string().required('Please select a frequency!'),
    endDate: yup.string().required('Date is required!'),
    target: yup
      .number()
      .required('Target Unit is required!')
      .min(1, 'Target is too small!'),
    measurementUnit: yup.string().required('Unit Of Measurement is required!'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="Create Task" hasGoBackButton={true} />
      <Formik
        initialValues={{
          name: '',
          frequency: '',
          endDate: '',
        }}
        validateOnBlur={true}
        validationSchema={goalValidationSchema}
        onSubmit={formData => {
          console.log(formData);
        }}>
        {({
          handleSubmit,
          errors,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <KeyboardAwareScrollView style={styles.formContainer}>
            <TextField
              label="Task Name"
              placeholder="What do you want to accomplish?"
              value={values.name}
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <TextField
              type="select"
              label="Frequency"
              placeholder="Which frequency does your goal fit?"
              menuItems={['Once', 'Daily', 'Weekly', 'Monthly']}
              value={values.frequency}
              error={errors.frequency}
              onChangeText={handleChange('frequency')}
              onBlur={handleBlur('frequency')}
            />
            <TextField
              type="date"
              label={values.frequency === 'Once' ? 'Task Date' : 'End Date'}
              placeholder="When is the endDate to meet your goal?"
              value={values.endDate}
              error={errors.endDate}
              onChangeText={handleChange('endDate')}
              onBlur={handleBlur('endDate')}
            />

            <Button
              mode="contained"
              loading={isSubmitting}
              disabled={isSubmitting}
              contentStyle={styles.submitBtnContent}
              style={styles.submitBtn}
              onPress={_e => handleSubmit()}>
              Create Task
            </Button>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateTaskScreen;
