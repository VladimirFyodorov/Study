/* eslint-disable @typescript-eslint/no-namespace */
// BEGIN (write your solution here)
namespace Company {
  export function isEmployeeEmail(email: string, url: string): boolean {
    return email.endsWith(`@${url}`);
  };
}
// END

type User = {
  email: string
};

function authorize(user: User | null): boolean {
  const companyDomain = 'hexlet.io';

  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
