import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {Formik} from 'formik';
import StatusBarPrimary from '@GoalTrackingApp/components/layout/statusbar/primaryStatusbar/StatusBarPrimary';
import Topbar from '@GoalTrackingApp/components/layout/topbar/Topbar';
import TextField from '@GoalTrackingApp/components/styledComponents/textField/TextField';
import CreateGoalTabStyles from './CreateGoalTabStyles';
import useTheme from '@GoalTrackingApp/theme';

const CreateGoalTab: React.FC<{}> = () => {
  const theme = useTheme();
  const styles = CreateGoalTabStyles(theme);

  const goalValidationSchema = yup.object().shape({
    name: yup.string().required('Goal name is required!'),
    category: yup.string().required('Please select a category!'),
    deadline: yup.string().required('Deadline is required!'),
    target: yup
      .number()
      .required('Target Unit is required!')
      .min(1, 'Target is too small!'),
    measurementUnit: yup.string().required('Unit Of Measurement is required!'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarPrimary />
      <Topbar title="Create Goal" hasGoBackButton={false} />
      <Formik
        initialValues={{
          name: '',
          category: '',
          target: '',
          measurementUnit: '',
          deadline: '',
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
              label="Goal Name"
              placeholder="What do you want to accomplish?"
              value={values.name}
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            <TextField
              type="select"
              label="Category"
              placeholder="Which category does your goal fit?"
              menuItems={[
                'Personal Development',
                'Business and Career',
                'Health and Fitness',
                'Relationships and Social',
                'Finance and Material Goods',
                'Other',
              ]}
              value={values.category}
              error={errors.category}
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
            />
            <TextField
              label="Target Unit"
              placeholder="What is your target?"
              value={values.target}
              error={errors.target}
              onChangeText={handleChange('target')}
              onBlur={handleBlur('target')}
              keyboardType="numeric"
            />
            <TextField
              label="Unit of Measurement"
              placeholder="Which units will you measure your progress in?"
              value={values.measurementUnit}
              error={errors.measurementUnit}
              onChangeText={handleChange('measurementUnit')}
              onBlur={handleBlur('measurementUnit')}
            />
            <TextField
              type="date"
              label="Deadline"
              placeholder="When is the deadline to meet your goal?"
              value={values.deadline}
              error={errors.deadline}
              onChangeText={handleChange('deadline')}
              onBlur={handleBlur('deadline')}
            />

            <Button
              mode="contained"
              loading={isSubmitting}
              disabled={isSubmitting}
              contentStyle={styles.submitBtnContent}
              style={styles.submitBtn}
              onPress={_e => handleSubmit()}>
              Create Goal
            </Button>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CreateGoalTab;
