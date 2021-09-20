import React from 'react'

export type UseConfirmProps = {
  ok?: unknown | null;
  cancel?: unknown | null;
};

export type UseConfirmOptions = {
  /**
   * Close after button click
   */
  close?: boolean;
};

/**
 * Confirmation function.
 * @param {*} props - The component props
 */
export type UseConfirm = <P = any>(
  props: P
) => Promise<undefined | unknown | null>;

export type EventType = 'click';

export type Handler = (
  event: EventType,
  // eslint-disable-next-line no-undef
  callback: EventListener | EventListenerObject,
  name?: string
) => void;

export type Container = React.MutableRefObject<HTMLElement | null>;

export type HandlerComponentProps = {
  children: React.ReactNode;
  container: Container;
};

export interface HandlerRef {
  ok: Handler;
  cancel: Handler;
}

export type ConfirmationContextProps = {
  show: boolean;
  setShow?: (value: boolean) => void;
  setProps?: (props: any) => void;
  alertRef: React.RefObject<HandlerRef>;
};

export type WrapperComponent =
  | React.FC<any>
  | (<P = any>(props: P) => React.ReactNode);

export type ConfirmationProviderProps = {
  /**
   * The parent element to render the component.
   */
  parent?: HTMLElement | null;

  /**
   * Render component
   */
  Component: WrapperComponent;

  children?: React.ReactNode | null;
};
