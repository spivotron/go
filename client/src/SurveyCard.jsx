import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import QuestionBuilder from "./QuestionBuilder";

const SurveyCard = props => {
	const { _id, questions } = props;
	return (
		<Card color="purple" fluid>
			<Card.Content>
				<Card.Meta>Survey {_id}</Card.Meta>
				{questions &&
					questions.map(question => <QuestionBuilder question={question} />)}
			</Card.Content>
			<Card.Content extra>
				<Link to={`/survey/${_id}`}>Take Survey</Link>
			</Card.Content>
		</Card>
	);
};

export default SurveyCard;
