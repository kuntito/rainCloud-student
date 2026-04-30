import { HStack, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { McqOption } from "../../../../../models/mcqQuestion"

interface Props {
    options: McqOption[];
}

const McqOptionList = ({ options }: Props) => {
    const onChange = () => {}
    return (
        <RadioGroup
            onChange={onChange}
            value=""
        >
            <Stack>
                {options.map((opt, idx) => 
                    <Radio 
                        value="1"
                        key={idx}
                    >
                        {opt.text}
                    </Radio>
                )}
            </Stack>
        </RadioGroup>
    )
}

export default McqOptionList