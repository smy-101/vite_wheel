import { classes } from '@/helper/classes';
import './button.scss';

type ButtonProps = {
  type?: 'default' | 'primary' | 'danger';
  theme?: 'button' | 'text' | 'link';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    theme = 'button',
    size = 'medium',
    loading = false,
    disabled = false,
    ghost = false,
    onClick,
    className,
    style,
    children,
    ...rest
  } = props;

  const buttonClassName = classes('jui-button', [size, type, className], `jui-theme-${theme}`, {
    disabled,
    ghost,
    loading
  });

  return (
    <>
      <button className={buttonClassName} style={style} {...rest} onClick={onClick}>
        {loading && <span className={classes('jui-loadingIndicator', type)} />}
        <span className="jui-button-inner">{children ? children : 'Button'}</span>
      </button>
    </>
  );
};

export { Button };
