import { useList, HttpError } from '@refinedev/core';
import { Card, Timeline } from 'antd';

interface IUser {
  id: number,
  birthday: string,
  firstName: string,
  lastName: string,
  avatar: [{
    url: string,
  }],
}

const BirthDayTimeline = () => {
  const { data, isLoading, isError } = useList<IUser, HttpError>({
    resource: 'users',
    sorters: [{ field: 'birthday', order: 'asc' }],
  });

  const users = data?.data.map((user) => ({
    children: user.firstName + " " + user.lastName,
  })) ?? [];

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oeps something went wrong!</div>
  }

  return (
    <Card title="Upcomming Birthdays">
      <Timeline items={users} />
    </Card>
  );
};

export default BirthDayTimeline;