import { Link, useParams } from 'react-router-dom';
import { Person } from '../types';
import cn from 'classnames';

type PeopleProps = {
  people: Person[];
};

export const PersonFilter = ({ people }: PeopleProps) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      {people.map(person => {
        const isSelected = person.slug === slug;

        return (
          <tr
            key={person.slug}
            data-cy="person"
            className={cn({
              'has-background-warning': isSelected,
            })}
          >
            <td>
              <Link
                to={`/people/${person.slug}`}
                className={cn({
                  'has-text-danger': person.sex === 'f',
                })}
              >
                {person.name}
              </Link>
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              {person.motherName ? (
                person.mother ? (
                  <Link
                    to={`/people/${person.mother.slug}`}
                    className="has-text-danger"
                  >
                    {person.motherName}
                  </Link>
                ) : (
                  person.motherName
                )
              ) : (
                '-'
              )}
            </td>
            <td>
              {person.fatherName ? (
                person.father ? (
                  <Link to={`/people/${person.father.slug}`}>
                    {person.fatherName}
                  </Link>
                ) : (
                  person.fatherName
                )
              ) : (
                '-'
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};
