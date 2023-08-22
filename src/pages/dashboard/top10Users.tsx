import { useList, HttpError } from '@refinedev/core';
import { Avatar, Card, List, Typography } from 'antd';

interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  avatar: [{
    url: string,
  }],
}

const Top10Users = () => {
  const { data, isLoading, isError } = useList<IUser, HttpError>({
    resource: 'users',
  });

  const users = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oeps something went wrong!</div>
  }

  return (
    <Card title="Top 10 Users">
        <List
          bordered
          dataSource={users}
          renderItem={(user) => (
            <List.Item>
              <Avatar size="large" src={<img src={user.avatar[0].url} alt="avatar" />} />
              <Typography.Text strong>{user.firstName} {user.lastName}</Typography.Text>
            </List.Item>
          )}
        >
      </List>
    </Card>
  );
};
export default Top10Users;