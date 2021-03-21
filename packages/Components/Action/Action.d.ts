
import { TActionProps } from './Action.type';

function Action(props: TActionProps): JSX.Element

Action.propTypes = {
  onTap: T.func,
  to: T.string,
};

export default Action;
