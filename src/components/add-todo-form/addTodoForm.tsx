import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Form, FormikProvider } from 'formik'
import MotionedField from '../motionedField/motionedField'
import MotionedSelect from '../motionedSelect/motionedSelet'
import { Save } from 'lucide-react'
import useAddTodo from './hook/useAddTodoForm'
import { CardContent, CardFooter } from '../ui/card'
import MotionedTextArea from '../motionedTextarea/motionedTextarea'
import { CATEGORIES, PRIORITES } from '@/constants/constants'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'


const   AddTodoForm = () => {
    const [hasExpiration, setHasExpiration] = useState<boolean>(false);
    const formik = useAddTodo();
    return (
        <FormikProvider value={formik}>
            <Form className='p-0 max-w-fit'>
                <CardContent className="space-y-6 w-xl">
                        <MotionedField 
                            type='text'
                            label='Title'
                            name='title'
                            isPassword={false}
                            required={true}
                            placeholder='Enter task title..'
                            style={{
                                label: "text-sm font-medium flex items-center text-white",
                                input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
                            }}
                        />
                        <MotionedTextArea
                            label="Description"
                            name='description'
                            placeholder='Enter task description'
                            style={{
                                label: "text-sm font-medium flex items-center text-white", 
                                input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white min-h-[100px]"
                            }}
                        />
                    

                        <MotionedSelect
                            label='Category'
                            name='category'
                            defaultValue={"personal"}
                            placeholder='Select Category'
                            options = {CATEGORIES}
                            required={true}
                        />

                        <MotionedSelect
                            label='Priority'
                            name='priority'
                            defaultValue={"medium"}
                            placeholder='Select Priority'
                            options = {PRIORITES}
                            required={true}
                        />
    
                    <div className="space-y-4 mb-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                            id="hasExpiration"
                            checked={hasExpiration}
                            onCheckedChange={(checked) => {
                                setHasExpiration(checked as boolean)
                            }}
                            className="text-orange-500 focus:ring-orange-500 data-[state=checked]:bg-orange-500"
                            />
                            <Label htmlFor="hasExpiration" className="text-sm font-medium cursor-pointer text-white">
                            Set expiration date
                            </Label>
                        </div>
                    </div>

                        {hasExpiration && (
                            <MotionedField
                                isPassword={false}
                                id='expiresAt'
                                type='date'
                                label='Expiration Data'
                                name='expiresAt'
                                min={new Date().toISOString().split("T")[0]}
                                required={hasExpiration}
                                style={{
                                    label: "text-sm font-medium flex items-center text-white",
                                    input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white text-white"
                                }}
                            />
                        )}
                </CardContent>


                <CardFooter className="flex justify-end space-x-4 pt-4 border-t mt-4">
                    <Link to="/">
                    <Button variant="outline" type="button">
                        Cancel
                    </Button>
                    </Link>
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none shadow-md">
                    <Save className="h-4 w-4 mr-2" />
                    Save Task
                    </Button>
                </CardFooter>
            </Form>
        </FormikProvider>        
    )
}

export default AddTodoForm