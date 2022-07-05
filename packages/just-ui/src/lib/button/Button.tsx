import { classes } from '@/utils/classes';

type ButtonProps = {
  type?: 'default' | 'dashed' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  className?: string;
  href?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'medium',
    loading = false,
    disabled = false,
    ghost = false,
    htmlType = 'button',
    onClick,
    className,
    style,
    href,
    children,
    ...rest
  } = props;

  const buttonClassName = classes('just-ui', [size, type, className], { disabled, ghost, loading });

  return (
    <>
      <button className={buttonClassName} style={style} type={htmlType} {...rest}>
        {children ? children : 'Button'}
      </button>
    </>
  );
};
