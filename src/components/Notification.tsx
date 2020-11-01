import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import Alert, {Color} from '@material-ui/lab/Alert/Alert';

interface INotificationProps {
  children: (callback: (text: string, type: Color) => void) => React.ReactElement
}

export const Notification: React.FC<INotificationProps> = ({children}) => {

  const [notificationObj, setNotificationObj] = useState<{text: string, type: Color}>({
    text: '',
    type: 'success'
  })
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openNotification = (text: string, type: Color) => {
    setNotificationObj({text, type})
    setIsOpen(true)
  }

  return (
    <>
      {children(openNotification)}
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => setIsOpen(false)}>
        <Alert onClose={() => setIsOpen(false)} severity={notificationObj.type}>
          {notificationObj.text}
        </Alert>
      </Snackbar>
    </>
  );
};

