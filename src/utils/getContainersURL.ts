const getContainersURL = ({
  hostname = 'http://localhost:8081',
  appName = '',
  version = '',
  platform = '',
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
