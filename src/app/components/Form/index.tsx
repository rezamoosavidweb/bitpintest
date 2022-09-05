import React, { Fragment, useEffect } from 'react';
import { useFormik } from 'formik';
import { Variant } from '@mui/material/styles/createTypography';
import {
  CustomAdminInput,
  CustomAdminInputLabel,
  CustomAdminSelect,
  CustomAdminTextArea,
  CustomInputLabel,
  CustomPlaceholder,
  CustomSelect,
  CustomTextField,
  CustomTextFieldAdmin,
} from '../Inputs';
import { Button, FormControl, Grid, InputLabel, MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { messages } from 'app/messages';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AdapterJalali from '@date-io/date-fns-jalali';
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import UploadFile from '../Inputs/UploadFile';

interface Fields {
  type?: string;
  label?: string;
  name?: string;
  id?: number;
  xs?: number;
  md?: number;
  lg?: number;
  row?: number;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ id: number; title: string; value: string | number }>;
  GridPadding?: string;
  GridMargin?: string;
  fontWeight?: string;
  variant?: any;
  color?: string;
  style?: React.CSSProperties;
  component?: any;
  uploadButtonText?: string;
}
interface Props {
  fields: Array<Fields>;
  validationSchema: any;
  initialValues: any;
  title: string;
  titleVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3';
  // titleStyle?: { marginBottom?: string; marginTop?: string; color?: string };
  titleStyle?: React.CSSProperties;
  labelstyle?: React.CSSProperties;
  sticky?: boolean;
  adminInputType?: boolean;
  showCancelBtn?: boolean;
  submitBtnText?: string;
  btnAligment: string;
  submitBtnStyle?: React.CSSProperties;
  submitBtnType?: 'contained' | 'outlined';
  submitBtnColor?: any;
  submitAction?: any;
  setFormik?: any;
}

const MuiForm: React.FC<Props> = ({
  title,
  initialValues,
  fields,
  validationSchema,
  titleVariant,
  titleStyle,
  labelstyle,
  sticky,
  adminInputType,
  showCancelBtn,
  submitBtnText,
  btnAligment,
  submitBtnStyle,
  submitBtnType,
  submitBtnColor,
  setFormik,
  submitAction,
}) => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
      submitAction(values);
    },
  });
  // console.log(formik.errors, "errors");
  useEffect(() => {
    if (formik?.values && setFormik) setFormik(formik);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik?.values]);
  return (
    <Grid
      container
      direction="column"
      sx={{ position: sticky ? 'sticky' : null, top: 0, height: 'fit-content' }}
    >
      <Typography variant={titleVariant ? titleVariant : 'h2'} style={titleStyle}>
        {title}
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid container alignItems="flex-start">
          {fields.map(item => {
            return (
              <Fragment key={item.id}>
                {item.type === 'title' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 4}
                    lg={item?.lg || 3}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    <Typography
                      variant={item.variant ? item.variant : 'body1'}
                      fontWeight={item.fontWeight}
                      style={item.style}
                    >
                      {item.label}
                    </Typography>
                  </Grid>
                ) : item.type === 'text' || item.type === 'number' || item.type === 'email' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 4}
                    lg={item?.lg || 3}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    {adminInputType ? (
                      <Grid container direction="column">
                        <CustomAdminInputLabel variant="body2">
                          {item.label}
                          {item.required && <span>*</span>}
                        </CustomAdminInputLabel>
                        <CustomAdminInput
                          type={item.type}
                          name={item.name}
                          required={item.required}
                          value={formik.values[`${item.name}`] || ''}
                          onChange={formik.handleChange}
                          placeholder={item?.placeholder}
                          error={
                            formik.touched[`${item.name}`] && Boolean(formik.errors[`${item.name}`])
                              ? 'error'
                              : ''
                          }
                        />
                        {formik.touched[`${item.name}`] &&
                        Boolean(formik.errors[`${item.name}`]) ? (
                          <Typography variant="caption3" color="error">
                            <>{formik?.errors[`${item.name}`]}</>
                          </Typography>
                        ) : null}
                      </Grid>
                    ) : (
                      <FormControl fullWidth>
                        <CustomTextField
                          label={item.label}
                          type={item.type}
                          name={item.name}
                          required={item.required}
                          value={formik.values[`${item.name}`] || ''}
                          onChange={formik.handleChange}
                          labelstyle={labelstyle}
                          error={
                            formik.touched[`${item.name}`] && Boolean(formik.errors[`${item.name}`])
                          }
                          helperText={
                            !!formik?.touched[`${item.name}`] &&
                            !!formik?.errors[`${item.name}`] && (
                              <Typography component="span">
                                <Grid component="span">
                                  <>{formik?.errors[`${item.name}`]}</>
                                </Grid>
                              </Typography>
                            )
                          }
                        />
                      </FormControl>
                    )}
                  </Grid>
                ) : item.type === 'select' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 4}
                    lg={item?.lg || 3}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    {adminInputType ? (
                      <FormControl fullWidth>
                        <CustomAdminInputLabel variant="body2">
                          {item.label}
                          <span>*</span>
                        </CustomAdminInputLabel>
                        <CustomAdminSelect
                          name={item.name}
                          value={formik.values[`${item.name}`] || 'placeholder'}
                          label={item.label}
                          onChange={formik.handleChange}
                          IconComponent={KeyboardArrowDownRounded}
                        >
                          <MenuItem disabled value="placeholder">
                            <CustomPlaceholder variant="caption1">
                              {item?.placeholder}
                            </CustomPlaceholder>
                          </MenuItem>
                          {item.options?.map(opt => (
                            <MenuItem value={opt.value} key={opt.id}>
                              {opt.title}
                            </MenuItem>
                          ))}
                        </CustomAdminSelect>
                      </FormControl>
                    ) : (
                      <FormControl fullWidth>
                        <CustomInputLabel style={labelstyle} id="demo-simple-select-label">
                          {item.label}
                        </CustomInputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name={item.name}
                          value={formik.values[`${item.name}`] || ''}
                          label={item.label}
                          onChange={formik.handleChange}
                          IconComponent={KeyboardArrowDownRounded}
                        >
                          {item.options?.map(opt => (
                            <MenuItem value={opt.value} key={opt.id}>
                              {opt.title}
                            </MenuItem>
                          ))}
                        </CustomSelect>
                      </FormControl>
                    )}
                  </Grid>
                ) : item.type === 'date' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 4}
                    lg={item?.lg || 3}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    {adminInputType ? (
                      <FormControl fullWidth>
                        <CustomAdminInputLabel variant="body2">
                          {item.label}
                          {item.required && <span>*</span>}
                        </CustomAdminInputLabel>
                        <LocalizationProvider
                          dateAdapter={i18n.dir() === 'rtl' ? AdapterJalali : AdapterDateFns}
                        >
                          <DatePicker
                            label={item.label}
                            inputFormat="MM/dd/yyyy"
                            value={formik.values[`${item.name}`] || ''}
                            onChange={value => formik.setFieldValue(item.name || 'date', value)}
                            renderInput={params => (
                              <CustomTextFieldAdmin
                                {...params}
                                name={item.name}
                                required={item.required}
                                error={
                                  formik.touched[`${item.name}`] &&
                                  Boolean(formik.errors[`${item.name}`])
                                }
                                helperText={
                                  !!formik?.touched[`${item.name}`] &&
                                  !!formik?.errors[`${item.name}`]
                                }
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </FormControl>
                    ) : (
                      <FormControl fullWidth>
                        <LocalizationProvider
                          dateAdapter={i18n.dir() === 'rtl' ? AdapterJalali : AdapterDateFns}
                        >
                          <DatePicker
                            label={item.label}
                            inputFormat="MM/dd/yyyy"
                            value={formik.values[`${item.name}`] || ''}
                            onChange={value => formik.setFieldValue(item.name || 'date', value)}
                            renderInput={params => (
                              <CustomTextField
                                {...params}
                                name={item.name}
                                required={item.required}
                                error={
                                  formik.touched[`${item.name}`] &&
                                  Boolean(formik.errors[`${item.name}`])
                                }
                                helperText={
                                  !!formik?.touched[`${item.name}`] &&
                                  !!formik?.errors[`${item.name}`]
                                }
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </FormControl>
                    )}
                  </Grid>
                ) : item.type === 'textArea' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 12}
                    lg={item?.lg || 12}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    {adminInputType ? (
                      <Grid container direction="column">
                        <CustomAdminInputLabel variant="body2">
                          {item.label}
                          {item.required && <span>*</span>}
                        </CustomAdminInputLabel>
                        <CustomAdminTextArea
                          name={item.name}
                          rows={item?.row}
                          required={item.required}
                          value={formik.values[`${item.name}`] || ''}
                          onChange={formik.handleChange}
                          placeholder={item?.placeholder}
                        />
                        {formik.touched[`${item.name}`] &&
                        Boolean(formik.errors[`${item.name}`]) ? (
                          <Typography variant="caption3" color="error">
                            <>{formik?.errors[`${item.name}`]}</>
                          </Typography>
                        ) : null}
                      </Grid>
                    ) : (
                      <FormControl fullWidth>
                        <CustomTextField
                          label={item.label}
                          type={item.type}
                          name={item.name}
                          rows={item?.row || 7}
                          multiline
                          fullWidth
                          required={item.required}
                          value={formik.values[`${item.name}`] || ''}
                          onChange={formik.handleChange}
                          error={
                            formik.touched[`${item.name}`] && Boolean(formik.errors[`${item.name}`])
                          }
                          helperText={
                            !!formik?.touched[`${item.name}`] && !!formik?.errors[`${item.name}`]
                          }
                        />
                      </FormControl>
                    )}
                  </Grid>
                ) : item?.type === 'upload' ? (
                  <Grid
                    item
                    container
                    xs={item?.xs || 12}
                    md={item?.md || 12}
                    lg={item?.lg || 12}
                    padding={item.GridPadding}
                    margin={item.GridMargin}
                  >
                    <Grid container direction="column">
                      <CustomAdminInputLabel variant="body2">
                        {item.label}
                        {item.required && <span>*</span>}
                      </CustomAdminInputLabel>
                      <FormControl fullWidth>
                        <UploadFile
                          uploadButtonText={item.uploadButtonText}
                          name={item.name}
                          error={
                            formik.touched[`${item.name}`] && Boolean(formik.errors[`${item.name}`])
                          }
                          value={formik.values[`${item.name}`] || ''}
                          onChange={formik.handleChange}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                ) : item?.type === 'component' ? (
                  item?.component(formik.values[`${item.name}`] || '', formik.handleChange, formik)
                ) : null}
              </Fragment>
            );
          })}
        </Grid>
        <Grid container justifyContent={btnAligment} marginY={2}>
          {showCancelBtn && (
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: '13px' }}
              onClick={() => formik.resetForm()}
            >
              {t(messages.cancel())}
            </Button>
          )}
          <Button
            variant={submitBtnType ? submitBtnType : 'contained'}
            color={submitBtnColor || 'primary'}
            type="submit"
            style={submitBtnStyle}
          >
            {submitBtnText}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
export default MuiForm;
