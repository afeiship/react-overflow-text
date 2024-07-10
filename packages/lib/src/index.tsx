// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-overflow-text';
const isTextClamped = (elm: HTMLElement) => elm.scrollHeight > elm.clientHeight;

export type ReactOverflowTextProps = {
  as?: React.ElementType;
  onChange?: (isClamped: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactOverflowText extends Component<ReactOverflowTextProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    as: 'div',
  };

  private readonly rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  private observer: ResizeObserver | null = null;

  componentDidMount() {
    const { onChange } = this.props;
    const elem = this.rootRef.current as HTMLElement;
    this.observer = new ResizeObserver(() => {
      const isClamped = isTextClamped(elem);
      onChange?.(isClamped);
    });
    this.observer.observe(elem);
  }

  componentWillUnmount() {
    this.observer?.disconnect();
  }

  render() {
    const { className, children, as, ...rest } = this.props;
    const asProps = {
      'data-component': CLASS_NAME,
      className: cx(CLASS_NAME, className),
      ref: this.rootRef, ...rest,
    };
    return React.createElement(as!, asProps, children);
  }
}
