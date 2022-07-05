import { classes } from '../../utils/classes';

interface ButtonProps {
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  size: 'large' | 'default' | 'small';
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'default',
    className,
    disabled = false,
    children,
    ...rest
  } = props;
  return (
    <>
      <button {...rest} className={classes(className)}>
        {children}
      </button>
    </>
  );
};
