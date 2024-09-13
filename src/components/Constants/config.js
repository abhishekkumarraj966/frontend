// API Notification Message
export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: "Loading.....",
        message: "Data is being loaded, Please wait.",
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded',
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occurred while fetching the response from the server. Please try again.',
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occurred while passing the request data.',
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect to the server. Please check your Internet connection and try again later.',
    }
};

// API Service URL
export const SERVICE_URL = {
    userLogin: { url: '/loginUser', method: 'POST' }
};