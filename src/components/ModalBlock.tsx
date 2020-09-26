import React from 'react';
import {DialogContent, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Dialog} from '@material-ui/core'

interface ModalBlockProps {
  title: string
  children: React.ReactNode
  visible: boolean
  onClose: () => void
}

const ModalBlock: React.FC<ModalBlockProps> = ({visible, title, children, onClose}) => {
  return (
    <Dialog open={visible}>
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose}>
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
