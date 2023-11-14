export const ENV_ERR_APP_CONFIG_NOT_FOUND = {
    code: 500,
    type: 'ENV_ERR_KEY_NOT_FOUND',
    message: `The file app.config.json not found or does not contain valid data. otherwise relevant .env file is missing`,
    support_message: `1. Make sure you have a valid JSON named app.config.json at the root. \n
    2. It should structured in the following way { env: 'prod|dev|uat|etc', variables: ['array_of_required_variables_in_inv_file'] } \n
    3. Make sure you have valid .env file which matched the 'env' value in the above json, so the file name will be like '.dev.env' or '.prod.env'.
    4. The env file should contain all the variables that are written in 'variables' field in the app.config.json
    `,
};
export const ENV_ERR_KEY_NOT_FOUND = (key) => ({
    code: 500,
    type: 'ENV_ERR_KEY_NOT_FOUND',
    message: `Undefined key "${key}" in ${process.env}.env`,
    support_message: `Missing key "${key}" at the file ${process.env}.env`,
});
