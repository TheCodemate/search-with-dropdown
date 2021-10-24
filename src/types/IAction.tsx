interface IAction {
  type: 'SET_SEARCHED_PHRASE' | 'SET_DROPDOWN_ACTIVE' | 'SET_DROPDOWN_UNACTIVE';
  payload?: string;
}

export default IAction;
