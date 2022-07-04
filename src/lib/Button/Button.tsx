interface ButtonProps {
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  size: 'large' | 'default' | 'small';
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type, onClick, ...rest } = props;
  if (type === 'primary') {
    console.log(1);
  }
  return (
    <>
      <button>Click me</button>
    </>
  );
};
